# `privateCrossconnect` Submodule <a name="`privateCrossconnect` Submodule" id="@cdktf/provider-ionoscloud.privateCrossconnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateCrossconnect <a name="PrivateCrossconnect" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect ionoscloud_private_crossconnect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

privatecrossconnect.NewPrivateCrossconnect(scope Construct, id *string, config PrivateCrossconnectConfig) PrivateCrossconnect
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig">PrivateCrossconnectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig">PrivateCrossconnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putConnectableDatacenters">PutConnectableDatacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putPeers">PutPeers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetConnectableDatacenters">ResetConnectableDatacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetPeers">ResetPeers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectableDatacenters` <a name="PutConnectableDatacenters" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putConnectableDatacenters"></a>

```go
func PutConnectableDatacenters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putConnectableDatacenters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPeers` <a name="PutPeers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putPeers"></a>

```go
func PutPeers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putPeers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putTimeouts"></a>

```go
func PutTimeouts(value PrivateCrossconnectTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts">PrivateCrossconnectTimeouts</a>

---

##### `ResetConnectableDatacenters` <a name="ResetConnectableDatacenters" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetConnectableDatacenters"></a>

```go
func ResetConnectableDatacenters()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetId"></a>

```go
func ResetId()
```

##### `ResetPeers` <a name="ResetPeers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetPeers"></a>

```go
func ResetPeers()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateCrossconnect resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

privatecrossconnect.PrivateCrossconnect_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

privatecrossconnect.PrivateCrossconnect_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

privatecrossconnect.PrivateCrossconnect_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

privatecrossconnect.PrivateCrossconnect_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PrivateCrossconnect resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PrivateCrossconnect to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PrivateCrossconnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PrivateCrossconnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.connectableDatacenters">ConnectableDatacenters</a></code> | <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList">PrivateCrossconnectConnectableDatacentersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.peers">Peers</a></code> | <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList">PrivateCrossconnectPeersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference">PrivateCrossconnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.connectableDatacentersInput">ConnectableDatacentersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.peersInput">PeersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectableDatacenters`<sup>Required</sup> <a name="ConnectableDatacenters" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.connectableDatacenters"></a>

```go
func ConnectableDatacenters() PrivateCrossconnectConnectableDatacentersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList">PrivateCrossconnectConnectableDatacentersList</a>

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.peers"></a>

```go
func Peers() PrivateCrossconnectPeersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList">PrivateCrossconnectPeersList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.timeouts"></a>

```go
func Timeouts() PrivateCrossconnectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference">PrivateCrossconnectTimeoutsOutputReference</a>

---

##### `ConnectableDatacentersInput`<sup>Optional</sup> <a name="ConnectableDatacentersInput" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.connectableDatacentersInput"></a>

```go
func ConnectableDatacentersInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeersInput`<sup>Optional</sup> <a name="PeersInput" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.peersInput"></a>

```go
func PeersInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnect.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateCrossconnectConfig <a name="PrivateCrossconnectConfig" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

&privatecrossconnect.PrivateCrossconnectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ConnectableDatacenters: interface{},
	Description: *string,
	Id: *string,
	Peers: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.privateCrossconnect.PrivateCrossconnectTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.name">Name</a></code> | <code>*string</code> | The desired name. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.connectableDatacenters">ConnectableDatacenters</a></code> | <code>interface{}</code> | connectable_datacenters block. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.description">Description</a></code> | <code>*string</code> | The desired description. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#id PrivateCrossconnect#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.peers">Peers</a></code> | <code>interface{}</code> | peers block. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts">PrivateCrossconnectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#name PrivateCrossconnect#name}

---

##### `ConnectableDatacenters`<sup>Optional</sup> <a name="ConnectableDatacenters" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.connectableDatacenters"></a>

```go
ConnectableDatacenters interface{}
```

- *Type:* interface{}

connectable_datacenters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#connectable_datacenters PrivateCrossconnect#connectable_datacenters}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The desired description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#description PrivateCrossconnect#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#id PrivateCrossconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Peers`<sup>Optional</sup> <a name="Peers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.peers"></a>

```go
Peers interface{}
```

- *Type:* interface{}

peers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#peers PrivateCrossconnect#peers}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConfig.property.timeouts"></a>

```go
Timeouts PrivateCrossconnectTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts">PrivateCrossconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#timeouts PrivateCrossconnect#timeouts}

---

### PrivateCrossconnectConnectableDatacenters <a name="PrivateCrossconnectConnectableDatacenters" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacenters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

&privatecrossconnect.PrivateCrossconnectConnectableDatacenters {

}
```


### PrivateCrossconnectPeers <a name="PrivateCrossconnectPeers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

&privatecrossconnect.PrivateCrossconnectPeers {

}
```


### PrivateCrossconnectTimeouts <a name="PrivateCrossconnectTimeouts" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

&privatecrossconnect.PrivateCrossconnectTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#create PrivateCrossconnect#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#default PrivateCrossconnect#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#delete PrivateCrossconnect#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#update PrivateCrossconnect#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#create PrivateCrossconnect#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#default PrivateCrossconnect#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#delete PrivateCrossconnect#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/private_crossconnect#update PrivateCrossconnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateCrossconnectConnectableDatacentersList <a name="PrivateCrossconnectConnectableDatacentersList" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

privatecrossconnect.NewPrivateCrossconnectConnectableDatacentersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivateCrossconnectConnectableDatacentersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.get"></a>

```go
func Get(index *f64) PrivateCrossconnectConnectableDatacentersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateCrossconnectConnectableDatacentersOutputReference <a name="PrivateCrossconnectConnectableDatacentersOutputReference" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

privatecrossconnect.NewPrivateCrossconnectConnectableDatacentersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivateCrossconnectConnectableDatacentersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectConnectableDatacentersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateCrossconnectPeersList <a name="PrivateCrossconnectPeersList" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

privatecrossconnect.NewPrivateCrossconnectPeersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivateCrossconnectPeersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.get"></a>

```go
func Get(index *f64) PrivateCrossconnectPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateCrossconnectPeersOutputReference <a name="PrivateCrossconnectPeersOutputReference" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

privatecrossconnect.NewPrivateCrossconnectPeersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivateCrossconnectPeersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.datacenterName">DatacenterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.lanId">LanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.lanName">LanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `DatacenterName`<sup>Required</sup> <a name="DatacenterName" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.datacenterName"></a>

```go
func DatacenterName() *string
```

- *Type:* *string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.lanId"></a>

```go
func LanId() *string
```

- *Type:* *string

---

##### `LanName`<sup>Required</sup> <a name="LanName" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.lanName"></a>

```go
func LanName() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectPeersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateCrossconnectTimeoutsOutputReference <a name="PrivateCrossconnectTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/privatecrossconnect"

privatecrossconnect.NewPrivateCrossconnectTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateCrossconnectTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.privateCrossconnect.PrivateCrossconnectTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



