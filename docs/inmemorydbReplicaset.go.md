# `inmemorydbReplicaset` Submodule <a name="`inmemorydbReplicaset` Submodule" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InmemorydbReplicaset <a name="InmemorydbReplicaset" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset ionoscloud_inmemorydb_replicaset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

inmemorydbreplicaset.NewInmemorydbReplicaset(scope Construct, id *string, config InmemorydbReplicasetConfig) InmemorydbReplicaset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig">InmemorydbReplicasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig">InmemorydbReplicasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putConnections">PutConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetInitialSnapshotId">ResetInitialSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnections` <a name="PutConnections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putConnections"></a>

```go
func PutConnections(value InmemorydbReplicasetConnections)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putConnections.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putCredentials"></a>

```go
func PutCredentials(value InmemorydbReplicasetCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value InmemorydbReplicasetMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putResources"></a>

```go
func PutResources(value InmemorydbReplicasetResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putTimeouts"></a>

```go
func PutTimeouts(value InmemorydbReplicasetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialSnapshotId` <a name="ResetInitialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetInitialSnapshotId"></a>

```go
func ResetInitialSnapshotId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InmemorydbReplicaset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

inmemorydbreplicaset.InmemorydbReplicaset_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

inmemorydbreplicaset.InmemorydbReplicaset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

inmemorydbreplicaset.InmemorydbReplicaset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

inmemorydbreplicaset.InmemorydbReplicaset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a InmemorydbReplicaset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the InmemorydbReplicaset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing InmemorydbReplicaset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the InmemorydbReplicaset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference">InmemorydbReplicasetConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference">InmemorydbReplicasetCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference">InmemorydbReplicasetMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference">InmemorydbReplicasetResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference">InmemorydbReplicasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connectionsInput">ConnectionsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicyInput">EvictionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotIdInput">InitialSnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceModeInput">PersistenceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicasInput">ReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotId">InitialSnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceMode">PersistenceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicas">Replicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connections"></a>

```go
func Connections() InmemorydbReplicasetConnectionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference">InmemorydbReplicasetConnectionsOutputReference</a>

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentials"></a>

```go
func Credentials() InmemorydbReplicasetCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference">InmemorydbReplicasetCredentialsOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() InmemorydbReplicasetMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference">InmemorydbReplicasetMaintenanceWindowOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resources"></a>

```go
func Resources() InmemorydbReplicasetResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference">InmemorydbReplicasetResourcesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeouts"></a>

```go
func Timeouts() InmemorydbReplicasetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference">InmemorydbReplicasetTimeoutsOutputReference</a>

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connectionsInput"></a>

```go
func ConnectionsInput() InmemorydbReplicasetConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentialsInput"></a>

```go
func CredentialsInput() InmemorydbReplicasetCredentials
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EvictionPolicyInput`<sup>Optional</sup> <a name="EvictionPolicyInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicyInput"></a>

```go
func EvictionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialSnapshotIdInput`<sup>Optional</sup> <a name="InitialSnapshotIdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotIdInput"></a>

```go
func InitialSnapshotIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() InmemorydbReplicasetMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

---

##### `PersistenceModeInput`<sup>Optional</sup> <a name="PersistenceModeInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceModeInput"></a>

```go
func PersistenceModeInput() *string
```

- *Type:* *string

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicasInput"></a>

```go
func ReplicasInput() *f64
```

- *Type:* *f64

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resourcesInput"></a>

```go
func ResourcesInput() InmemorydbReplicasetResources
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicy"></a>

```go
func EvictionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialSnapshotId`<sup>Required</sup> <a name="InitialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotId"></a>

```go
func InitialSnapshotId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PersistenceMode`<sup>Required</sup> <a name="PersistenceMode" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceMode"></a>

```go
func PersistenceMode() *string
```

- *Type:* *string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicas"></a>

```go
func Replicas() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### InmemorydbReplicasetConfig <a name="InmemorydbReplicasetConfig" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

&inmemorydbreplicaset.InmemorydbReplicasetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Connections: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12.inmemorydbReplicaset.InmemorydbReplicasetConnections,
	Credentials: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12.inmemorydbReplicaset.InmemorydbReplicasetCredentials,
	DisplayName: *string,
	EvictionPolicy: *string,
	PersistenceMode: *string,
	Replicas: *f64,
	Resources: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12.inmemorydbReplicaset.InmemorydbReplicasetResources,
	Version: *string,
	Id: *string,
	InitialSnapshotId: *string,
	Location: *string,
	MaintenanceWindow: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12.inmemorydbReplicaset.InmemorydbReplicasetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human readable name of your replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | The eviction policy for the replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.persistenceMode">PersistenceMode</a></code> | <code>*string</code> | Specifies How and If data is persisted. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.replicas">Replicas</a></code> | <code>*f64</code> | The total number of replicas in the replica set (one active and n-1 passive). |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.version">Version</a></code> | <code>*string</code> | The InMemoryDB version of your replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#id InmemorydbReplicaset#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.initialSnapshotId">InitialSnapshotId</a></code> | <code>*string</code> | The ID of a snapshot to restore the replica set from. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.location">Location</a></code> | <code>*string</code> | The replica set location. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connections"></a>

```go
Connections InmemorydbReplicasetConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#connections InmemorydbReplicaset#connections}

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.credentials"></a>

```go
Credentials InmemorydbReplicasetCredentials
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#credentials InmemorydbReplicaset#credentials}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human readable name of your replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#display_name InmemorydbReplicaset#display_name}

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.evictionPolicy"></a>

```go
EvictionPolicy *string
```

- *Type:* *string

The eviction policy for the replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#eviction_policy InmemorydbReplicaset#eviction_policy}

---

##### `PersistenceMode`<sup>Required</sup> <a name="PersistenceMode" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.persistenceMode"></a>

```go
PersistenceMode *string
```

- *Type:* *string

Specifies How and If data is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#persistence_mode InmemorydbReplicaset#persistence_mode}

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.replicas"></a>

```go
Replicas *f64
```

- *Type:* *f64

The total number of replicas in the replica set (one active and n-1 passive).

In case of a standalone instance, the value is 1. In all other cases, the value is > 1. The replicas will not be available as read replicas, they are only standby for a failure of the active instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#replicas InmemorydbReplicaset#replicas}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.resources"></a>

```go
Resources InmemorydbReplicasetResources
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#resources InmemorydbReplicaset#resources}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The InMemoryDB version of your replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#version InmemorydbReplicaset#version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#id InmemorydbReplicaset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialSnapshotId`<sup>Optional</sup> <a name="InitialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.initialSnapshotId"></a>

```go
InitialSnapshotId *string
```

- *Type:* *string

The ID of a snapshot to restore the replica set from.

If set, the replica set will be created from the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#initial_snapshot_id InmemorydbReplicaset#initial_snapshot_id}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The replica set location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#location InmemorydbReplicaset#location}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow InmemorydbReplicasetMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#maintenance_window InmemorydbReplicaset#maintenance_window}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.timeouts"></a>

```go
Timeouts InmemorydbReplicasetTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#timeouts InmemorydbReplicaset#timeouts}

---

### InmemorydbReplicasetConnections <a name="InmemorydbReplicasetConnections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

&inmemorydbreplicaset.InmemorydbReplicasetConnections {
	Cidr: *string,
	DatacenterId: *string,
	LanId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.cidr">Cidr</a></code> | <code>*string</code> | The IP and subnet for your instance. Note the following unavailable IP ranges: 10.233.64.0/18, 10.233.0.0/18, 10.233.114.0/24. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | The datacenter to connect your instance to. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.lanId">LanId</a></code> | <code>*string</code> | The numeric LAN ID to connect your instance to. |

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

The IP and subnet for your instance. Note the following unavailable IP ranges: 10.233.64.0/18, 10.233.0.0/18, 10.233.114.0/24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#cidr InmemorydbReplicaset#cidr}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

The datacenter to connect your instance to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#datacenter_id InmemorydbReplicaset#datacenter_id}

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.lanId"></a>

```go
LanId *string
```

- *Type:* *string

The numeric LAN ID to connect your instance to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#lan_id InmemorydbReplicaset#lan_id}

---

### InmemorydbReplicasetCredentials <a name="InmemorydbReplicasetCredentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

&inmemorydbreplicaset.InmemorydbReplicasetCredentials {
	Username: *string,
	HashedPassword: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword,
	PlainTextPassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.username">Username</a></code> | <code>*string</code> | The username for the initial InMemoryDB user. Some system usernames are restricted (e.g. 'admin', 'standby'). |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.hashedPassword">HashedPassword</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a></code> | hashed_password block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.plainTextPassword">PlainTextPassword</a></code> | <code>*string</code> | The password for a InMemoryDB user. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username for the initial InMemoryDB user. Some system usernames are restricted (e.g. 'admin', 'standby').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#username InmemorydbReplicaset#username}

---

##### `HashedPassword`<sup>Optional</sup> <a name="HashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.hashedPassword"></a>

```go
HashedPassword InmemorydbReplicasetCredentialsHashedPassword
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

hashed_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#hashed_password InmemorydbReplicaset#hashed_password}

---

##### `PlainTextPassword`<sup>Optional</sup> <a name="PlainTextPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.plainTextPassword"></a>

```go
PlainTextPassword *string
```

- *Type:* *string

The password for a InMemoryDB user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#plain_text_password InmemorydbReplicaset#plain_text_password}

---

### InmemorydbReplicasetCredentialsHashedPassword <a name="InmemorydbReplicasetCredentialsHashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

&inmemorydbreplicaset.InmemorydbReplicasetCredentialsHashedPassword {
	Algorithm: *string,
	Hash: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.algorithm">Algorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#algorithm InmemorydbReplicaset#algorithm}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.hash">Hash</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#hash InmemorydbReplicaset#hash}. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#algorithm InmemorydbReplicaset#algorithm}.

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.hash"></a>

```go
Hash *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#hash InmemorydbReplicaset#hash}.

---

### InmemorydbReplicasetMaintenanceWindow <a name="InmemorydbReplicasetMaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

&inmemorydbreplicaset.InmemorydbReplicasetMaintenanceWindow {
	DayOfTheWeek: *string,
	Time: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>*string</code> | The name of the week day. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.time">Time</a></code> | <code>*string</code> | Start of the maintenance window in UTC time. |

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.dayOfTheWeek"></a>

```go
DayOfTheWeek *string
```

- *Type:* *string

The name of the week day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#day_of_the_week InmemorydbReplicaset#day_of_the_week}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.time"></a>

```go
Time *string
```

- *Type:* *string

Start of the maintenance window in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#time InmemorydbReplicaset#time}

---

### InmemorydbReplicasetResources <a name="InmemorydbReplicasetResources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

&inmemorydbreplicaset.InmemorydbReplicasetResources {
	Cores: *f64,
	Ram: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.cores">Cores</a></code> | <code>*f64</code> | The number of CPU cores per instance. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.ram">Ram</a></code> | <code>*f64</code> | The amount of memory per instance in gigabytes (GB). |

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.cores"></a>

```go
Cores *f64
```

- *Type:* *f64

The number of CPU cores per instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#cores InmemorydbReplicaset#cores}

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.ram"></a>

```go
Ram *f64
```

- *Type:* *f64

The amount of memory per instance in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#ram InmemorydbReplicaset#ram}

---

### InmemorydbReplicasetTimeouts <a name="InmemorydbReplicasetTimeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

&inmemorydbreplicaset.InmemorydbReplicasetTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#create InmemorydbReplicaset#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#default InmemorydbReplicaset#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#delete InmemorydbReplicaset#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#update InmemorydbReplicaset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#create InmemorydbReplicaset#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#default InmemorydbReplicaset#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#delete InmemorydbReplicaset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.10/docs/resources/inmemorydb_replicaset#update InmemorydbReplicaset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### InmemorydbReplicasetConnectionsOutputReference <a name="InmemorydbReplicasetConnectionsOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

inmemorydbreplicaset.NewInmemorydbReplicasetConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InmemorydbReplicasetConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanIdInput">LanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanId">LanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `LanIdInput`<sup>Optional</sup> <a name="LanIdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanIdInput"></a>

```go
func LanIdInput() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanId"></a>

```go
func LanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() InmemorydbReplicasetConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

---


### InmemorydbReplicasetCredentialsHashedPasswordOutputReference <a name="InmemorydbReplicasetCredentialsHashedPasswordOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

inmemorydbreplicaset.NewInmemorydbReplicasetCredentialsHashedPasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InmemorydbReplicasetCredentialsHashedPasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hashInput">HashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hash">Hash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `HashInput`<sup>Optional</sup> <a name="HashInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hashInput"></a>

```go
func HashInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hash"></a>

```go
func Hash() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() InmemorydbReplicasetCredentialsHashedPassword
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

---


### InmemorydbReplicasetCredentialsOutputReference <a name="InmemorydbReplicasetCredentialsOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

inmemorydbreplicaset.NewInmemorydbReplicasetCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InmemorydbReplicasetCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.putHashedPassword">PutHashedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetHashedPassword">ResetHashedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetPlainTextPassword">ResetPlainTextPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHashedPassword` <a name="PutHashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.putHashedPassword"></a>

```go
func PutHashedPassword(value InmemorydbReplicasetCredentialsHashedPassword)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.putHashedPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

---

##### `ResetHashedPassword` <a name="ResetHashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetHashedPassword"></a>

```go
func ResetHashedPassword()
```

##### `ResetPlainTextPassword` <a name="ResetPlainTextPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetPlainTextPassword"></a>

```go
func ResetPlainTextPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPassword">HashedPassword</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference">InmemorydbReplicasetCredentialsHashedPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPasswordInput">HashedPasswordInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPasswordInput">PlainTextPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPassword">PlainTextPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HashedPassword`<sup>Required</sup> <a name="HashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPassword"></a>

```go
func HashedPassword() InmemorydbReplicasetCredentialsHashedPasswordOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference">InmemorydbReplicasetCredentialsHashedPasswordOutputReference</a>

---

##### `HashedPasswordInput`<sup>Optional</sup> <a name="HashedPasswordInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPasswordInput"></a>

```go
func HashedPasswordInput() InmemorydbReplicasetCredentialsHashedPassword
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

---

##### `PlainTextPasswordInput`<sup>Optional</sup> <a name="PlainTextPasswordInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPasswordInput"></a>

```go
func PlainTextPasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `PlainTextPassword`<sup>Required</sup> <a name="PlainTextPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPassword"></a>

```go
func PlainTextPassword() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() InmemorydbReplicasetCredentials
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

---


### InmemorydbReplicasetMaintenanceWindowOutputReference <a name="InmemorydbReplicasetMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

inmemorydbreplicaset.NewInmemorydbReplicasetMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InmemorydbReplicasetMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeekInput">DayOfTheWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.timeInput">TimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfTheWeekInput`<sup>Optional</sup> <a name="DayOfTheWeekInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```go
func DayOfTheWeekInput() *string
```

- *Type:* *string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.timeInput"></a>

```go
func TimeInput() *string
```

- *Type:* *string

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```go
func DayOfTheWeek() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() InmemorydbReplicasetMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

---


### InmemorydbReplicasetResourcesOutputReference <a name="InmemorydbReplicasetResourcesOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

inmemorydbreplicaset.NewInmemorydbReplicasetResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InmemorydbReplicasetResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.storage">Storage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.coresInput">CoresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ramInput">RamInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.cores">Cores</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ram">Ram</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.storage"></a>

```go
func Storage() *f64
```

- *Type:* *f64

---

##### `CoresInput`<sup>Optional</sup> <a name="CoresInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.coresInput"></a>

```go
func CoresInput() *f64
```

- *Type:* *f64

---

##### `RamInput`<sup>Optional</sup> <a name="RamInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ramInput"></a>

```go
func RamInput() *f64
```

- *Type:* *f64

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.cores"></a>

```go
func Cores() *f64
```

- *Type:* *f64

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ram"></a>

```go
func Ram() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() InmemorydbReplicasetResources
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

---


### InmemorydbReplicasetTimeoutsOutputReference <a name="InmemorydbReplicasetTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v12/inmemorydbreplicaset"

inmemorydbreplicaset.NewInmemorydbReplicasetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InmemorydbReplicasetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



