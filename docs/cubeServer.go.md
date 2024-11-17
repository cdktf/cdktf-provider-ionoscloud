# `cubeServer` Submodule <a name="`cubeServer` Submodule" id="@cdktf/provider-ionoscloud.cubeServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CubeServer <a name="CubeServer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server ionoscloud_cube_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

cubeserver.NewCubeServer(scope Construct, id *string, config CubeServerConfig) CubeServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig">CubeServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig">CubeServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic">PutNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootCdrom">ResetBootCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootImage">ResetBootImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImagePassword">ResetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSecurityGroupsIds">ResetSecurityGroupsIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSshKeyPath">ResetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetVmState">ResetVmState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNic` <a name="PutNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic"></a>

```go
func PutNic(value CubeServerNic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts"></a>

```go
func PutTimeouts(value CubeServerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume"></a>

```go
func PutVolume(value CubeServerVolume)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetBootCdrom` <a name="ResetBootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootCdrom"></a>

```go
func ResetBootCdrom()
```

##### `ResetBootImage` <a name="ResetBootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootImage"></a>

```go
func ResetBootImage()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetId"></a>

```go
func ResetId()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImageName"></a>

```go
func ResetImageName()
```

##### `ResetImagePassword` <a name="ResetImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImagePassword"></a>

```go
func ResetImagePassword()
```

##### `ResetSecurityGroupsIds` <a name="ResetSecurityGroupsIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSecurityGroupsIds"></a>

```go
func ResetSecurityGroupsIds()
```

##### `ResetSshKeyPath` <a name="ResetSshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSshKeyPath"></a>

```go
func ResetSshKeyPath()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVmState` <a name="ResetVmState" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetVmState"></a>

```go
func ResetVmState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CubeServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

cubeserver.CubeServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

cubeserver.CubeServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

cubeserver.CubeServer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

cubeserver.CubeServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CubeServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CubeServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CubeServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CubeServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootVolume">BootVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.firewallruleId">FirewallruleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.inlineVolumeIds">InlineVolumeIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nic">Nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference">CubeServerNicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryIp">PrimaryIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryNic">PrimaryNic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference">CubeServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference">CubeServerVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdromInput">BootCdromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImageInput">BootImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePasswordInput">ImagePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nicInput">NicInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.securityGroupsIdsInput">SecurityGroupsIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPathInput">SshKeyPathInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuidInput">TemplateUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.vmStateInput">VmStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volumeInput">VolumeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdrom">BootCdrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImage">BootImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.securityGroupsIds">SecurityGroupsIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPath">SshKeyPath</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuid">TemplateUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.vmState">VmState</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BootVolume`<sup>Required</sup> <a name="BootVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootVolume"></a>

```go
func BootVolume() *string
```

- *Type:* *string

---

##### `FirewallruleId`<sup>Required</sup> <a name="FirewallruleId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.firewallruleId"></a>

```go
func FirewallruleId() *string
```

- *Type:* *string

---

##### `InlineVolumeIds`<sup>Required</sup> <a name="InlineVolumeIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.inlineVolumeIds"></a>

```go
func InlineVolumeIds() *[]*string
```

- *Type:* *[]*string

---

##### `Nic`<sup>Required</sup> <a name="Nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nic"></a>

```go
func Nic() CubeServerNicOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference">CubeServerNicOutputReference</a>

---

##### `PrimaryIp`<sup>Required</sup> <a name="PrimaryIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryIp"></a>

```go
func PrimaryIp() *string
```

- *Type:* *string

---

##### `PrimaryNic`<sup>Required</sup> <a name="PrimaryNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryNic"></a>

```go
func PrimaryNic() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeouts"></a>

```go
func Timeouts() CubeServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference">CubeServerTimeoutsOutputReference</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volume"></a>

```go
func Volume() CubeServerVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference">CubeServerVolumeOutputReference</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BootCdromInput`<sup>Optional</sup> <a name="BootCdromInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdromInput"></a>

```go
func BootCdromInput() *string
```

- *Type:* *string

---

##### `BootImageInput`<sup>Optional</sup> <a name="BootImageInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImageInput"></a>

```go
func BootImageInput() *string
```

- *Type:* *string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `ImagePasswordInput`<sup>Optional</sup> <a name="ImagePasswordInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePasswordInput"></a>

```go
func ImagePasswordInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NicInput`<sup>Optional</sup> <a name="NicInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nicInput"></a>

```go
func NicInput() CubeServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---

##### `SecurityGroupsIdsInput`<sup>Optional</sup> <a name="SecurityGroupsIdsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.securityGroupsIdsInput"></a>

```go
func SecurityGroupsIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SshKeyPathInput`<sup>Optional</sup> <a name="SshKeyPathInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPathInput"></a>

```go
func SshKeyPathInput() *[]*string
```

- *Type:* *[]*string

---

##### `TemplateUuidInput`<sup>Optional</sup> <a name="TemplateUuidInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuidInput"></a>

```go
func TemplateUuidInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VmStateInput`<sup>Optional</sup> <a name="VmStateInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.vmStateInput"></a>

```go
func VmStateInput() *string
```

- *Type:* *string

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volumeInput"></a>

```go
func VolumeInput() CubeServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BootCdrom`<sup>Required</sup> <a name="BootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdrom"></a>

```go
func BootCdrom() *string
```

- *Type:* *string

---

##### `BootImage`<sup>Required</sup> <a name="BootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImage"></a>

```go
func BootImage() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `ImagePassword`<sup>Required</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePassword"></a>

```go
func ImagePassword() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecurityGroupsIds`<sup>Required</sup> <a name="SecurityGroupsIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.securityGroupsIds"></a>

```go
func SecurityGroupsIds() *[]*string
```

- *Type:* *[]*string

---

##### `SshKeyPath`<sup>Required</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPath"></a>

```go
func SshKeyPath() *[]*string
```

- *Type:* *[]*string

---

##### `TemplateUuid`<sup>Required</sup> <a name="TemplateUuid" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuid"></a>

```go
func TemplateUuid() *string
```

- *Type:* *string

---

##### `VmState`<sup>Required</sup> <a name="VmState" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.vmState"></a>

```go
func VmState() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CubeServerConfig <a name="CubeServerConfig" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

&cubeserver.CubeServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatacenterId: *string,
	Name: *string,
	Nic: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.cubeServer.CubeServerNic,
	TemplateUuid: *string,
	Volume: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.cubeServer.CubeServerVolume,
	AvailabilityZone: *string,
	BootCdrom: *string,
	BootImage: *string,
	Hostname: *string,
	Id: *string,
	ImageName: *string,
	ImagePassword: *string,
	SecurityGroupsIds: *[]*string,
	SshKeyPath: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.cubeServer.CubeServerTimeouts,
	VmState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.nic">Nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.templateUuid">TemplateUuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#template_uuid CubeServer#template_uuid}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#availability_zone CubeServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootCdrom">BootCdrom</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootImage">BootImage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#boot_image CubeServer#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.hostname">Hostname</a></code> | <code>*string</code> | The hostname of the resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#id CubeServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#image_name CubeServer#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#image_password CubeServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.securityGroupsIds">SecurityGroupsIds</a></code> | <code>*[]*string</code> | The list of Security Group IDs for the server. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.sshKeyPath">SshKeyPath</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.vmState">VmState</a></code> | <code>*string</code> | Sets the power state of the cube server. Possible values: `RUNNING` or `SUSPENDED`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#name CubeServer#name}.

---

##### `Nic`<sup>Required</sup> <a name="Nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.nic"></a>

```go
Nic CubeServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#nic CubeServer#nic}

---

##### `TemplateUuid`<sup>Required</sup> <a name="TemplateUuid" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.templateUuid"></a>

```go
TemplateUuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#template_uuid CubeServer#template_uuid}.

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.volume"></a>

```go
Volume CubeServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#volume CubeServer#volume}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

##### `BootCdrom`<sup>Optional</sup> <a name="BootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootCdrom"></a>

```go
BootCdrom *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}.

---

##### `BootImage`<sup>Optional</sup> <a name="BootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootImage"></a>

```go
BootImage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#boot_image CubeServer#boot_image}.

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

The hostname of the resource.

Allowed characters are a-z, 0-9 and - (minus). Hostname should not start with minus and should not be longer than 63 characters. If no value provided explicitly, it will be populated with the name of the server

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#hostname CubeServer#hostname}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#id CubeServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#image_name CubeServer#image_name}.

---

##### `ImagePassword`<sup>Optional</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imagePassword"></a>

```go
ImagePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#image_password CubeServer#image_password}.

---

##### `SecurityGroupsIds`<sup>Optional</sup> <a name="SecurityGroupsIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.securityGroupsIds"></a>

```go
SecurityGroupsIds *[]*string
```

- *Type:* *[]*string

The list of Security Group IDs for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#security_groups_ids CubeServer#security_groups_ids}

---

##### `SshKeyPath`<sup>Optional</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.sshKeyPath"></a>

```go
SshKeyPath *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.timeouts"></a>

```go
Timeouts CubeServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#timeouts CubeServer#timeouts}

---

##### `VmState`<sup>Optional</sup> <a name="VmState" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.vmState"></a>

```go
VmState *string
```

- *Type:* *string

Sets the power state of the cube server. Possible values: `RUNNING` or `SUSPENDED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#vm_state CubeServer#vm_state}

---

### CubeServerNic <a name="CubeServerNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

&cubeserver.CubeServerNic {
	Lan: *f64,
	Dhcp: interface{},
	Dhcpv6: interface{},
	Firewall: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.cubeServer.CubeServerNicFirewall,
	FirewallActive: interface{},
	FirewallType: *string,
	Ips: *[]*string,
	Ipv6CidrBlock: *string,
	Ipv6Ips: *[]*string,
	Name: *string,
	SecurityGroupsIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.lan">Lan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#lan CubeServer#lan}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#dhcp CubeServer#dhcp}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcpv6">Dhcpv6</a></code> | <code>interface{}</code> | Indicates whether this NIC receives an IPv6 address through DHCP. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewall">Firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | firewall block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallActive">FirewallActive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#firewall_active CubeServer#firewall_active}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallType">FirewallType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#firewall_type CubeServer#firewall_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ips">Ips</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#ips CubeServer#ips}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | IPv6 CIDR block assigned to the NIC. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6Ips">Ipv6Ips</a></code> | <code>*[]*string</code> | Collection for IPv6 addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.securityGroupsIds">SecurityGroupsIds</a></code> | <code>*[]*string</code> | The list of Security Group IDs for the NIC. |

---

##### `Lan`<sup>Required</sup> <a name="Lan" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.lan"></a>

```go
Lan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#lan CubeServer#lan}.

---

##### `Dhcp`<sup>Optional</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcp"></a>

```go
Dhcp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#dhcp CubeServer#dhcp}.

---

##### `Dhcpv6`<sup>Optional</sup> <a name="Dhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcpv6"></a>

```go
Dhcpv6 interface{}
```

- *Type:* interface{}

Indicates whether this NIC receives an IPv6 address through DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#dhcpv6 CubeServer#dhcpv6}

---

##### `Firewall`<sup>Optional</sup> <a name="Firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewall"></a>

```go
Firewall CubeServerNicFirewall
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#firewall CubeServer#firewall}

---

##### `FirewallActive`<sup>Optional</sup> <a name="FirewallActive" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallActive"></a>

```go
FirewallActive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#firewall_active CubeServer#firewall_active}.

---

##### `FirewallType`<sup>Optional</sup> <a name="FirewallType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallType"></a>

```go
FirewallType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#firewall_type CubeServer#firewall_type}.

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ips"></a>

```go
Ips *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#ips CubeServer#ips}.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6CidrBlock"></a>

```go
Ipv6CidrBlock *string
```

- *Type:* *string

IPv6 CIDR block assigned to the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#ipv6_cidr_block CubeServer#ipv6_cidr_block}

---

##### `Ipv6Ips`<sup>Optional</sup> <a name="Ipv6Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6Ips"></a>

```go
Ipv6Ips *[]*string
```

- *Type:* *[]*string

Collection for IPv6 addresses assigned to a nic.

Explicitly assigned IPv6 addresses need to come from inside the IPv6 CIDR block assigned to the nic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#ipv6_ips CubeServer#ipv6_ips}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#name CubeServer#name}.

---

##### `SecurityGroupsIds`<sup>Optional</sup> <a name="SecurityGroupsIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.securityGroupsIds"></a>

```go
SecurityGroupsIds *[]*string
```

- *Type:* *[]*string

The list of Security Group IDs for the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#security_groups_ids CubeServer#security_groups_ids}

---

### CubeServerNicFirewall <a name="CubeServerNicFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

&cubeserver.CubeServerNicFirewall {
	Protocol: *string,
	IcmpCode: *string,
	IcmpType: *string,
	Name: *string,
	PortRangeEnd: *f64,
	PortRangeStart: *f64,
	SourceIp: *string,
	SourceMac: *string,
	TargetIp: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#protocol CubeServer#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpCode">IcmpCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#icmp_code CubeServer#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpType">IcmpType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#icmp_type CubeServer#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeEnd">PortRangeEnd</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#port_range_end CubeServer#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeStart">PortRangeStart</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#port_range_start CubeServer#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceIp">SourceIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#source_ip CubeServer#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceMac">SourceMac</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#source_mac CubeServer#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.targetIp">TargetIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#target_ip CubeServer#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#type CubeServer#type}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#protocol CubeServer#protocol}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpCode"></a>

```go
IcmpCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#icmp_code CubeServer#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpType"></a>

```go
IcmpType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#icmp_type CubeServer#icmp_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#name CubeServer#name}.

---

##### `PortRangeEnd`<sup>Optional</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeEnd"></a>

```go
PortRangeEnd *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#port_range_end CubeServer#port_range_end}.

---

##### `PortRangeStart`<sup>Optional</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeStart"></a>

```go
PortRangeStart *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#port_range_start CubeServer#port_range_start}.

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceIp"></a>

```go
SourceIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#source_ip CubeServer#source_ip}.

---

##### `SourceMac`<sup>Optional</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceMac"></a>

```go
SourceMac *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#source_mac CubeServer#source_mac}.

---

##### `TargetIp`<sup>Optional</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.targetIp"></a>

```go
TargetIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#target_ip CubeServer#target_ip}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#type CubeServer#type}.

---

### CubeServerTimeouts <a name="CubeServerTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

&cubeserver.CubeServerTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#create CubeServer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#default CubeServer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#delete CubeServer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#update CubeServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#create CubeServer#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#default CubeServer#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#delete CubeServer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#update CubeServer#update}.

---

### CubeServerVolume <a name="CubeServerVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

&cubeserver.CubeServerVolume {
	DiskType: *string,
	AvailabilityZone: *string,
	BackupUnitId: *string,
	Bus: *string,
	ImagePassword: *string,
	LicenceType: *string,
	Name: *string,
	SshKeyPath: *[]*string,
	UserData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.diskType">DiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#disk_type CubeServer#disk_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#availability_zone CubeServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.backupUnitId">BackupUnitId</a></code> | <code>*string</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.bus">Bus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#bus CubeServer#bus}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#image_password CubeServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.licenceType">LicenceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#licence_type CubeServer#licence_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.sshKeyPath">SshKeyPath</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.userData">UserData</a></code> | <code>*string</code> | The cloud-init configuration for the volume as base64 encoded string. |

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#disk_type CubeServer#disk_type}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

##### `BackupUnitId`<sup>Optional</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.backupUnitId"></a>

```go
BackupUnitId *string
```

- *Type:* *string

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#backup_unit_id CubeServer#backup_unit_id}

---

##### `Bus`<sup>Optional</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.bus"></a>

```go
Bus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#bus CubeServer#bus}.

---

##### `ImagePassword`<sup>Optional</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.imagePassword"></a>

```go
ImagePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#image_password CubeServer#image_password}.

---

##### `LicenceType`<sup>Optional</sup> <a name="LicenceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.licenceType"></a>

```go
LicenceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#licence_type CubeServer#licence_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#name CubeServer#name}.

---

##### `SshKeyPath`<sup>Optional</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.sshKeyPath"></a>

```go
SshKeyPath *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cube_server#user_data CubeServer#user_data}

---

## Classes <a name="Classes" id="Classes"></a>

### CubeServerNicFirewallOutputReference <a name="CubeServerNicFirewallOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

cubeserver.NewCubeServerNicFirewallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CubeServerNicFirewallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeEnd">ResetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeStart">ResetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceMac">ResetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetTargetIp">ResetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpCode"></a>

```go
func ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpType"></a>

```go
func ResetIcmpType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPortRangeEnd` <a name="ResetPortRangeEnd" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeEnd"></a>

```go
func ResetPortRangeEnd()
```

##### `ResetPortRangeStart` <a name="ResetPortRangeStart" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeStart"></a>

```go
func ResetPortRangeStart()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceIp"></a>

```go
func ResetSourceIp()
```

##### `ResetSourceMac` <a name="ResetSourceMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceMac"></a>

```go
func ResetSourceMac()
```

##### `ResetTargetIp` <a name="ResetTargetIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetTargetIp"></a>

```go
func ResetTargetIp()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEndInput">PortRangeEndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStartInput">PortRangeStartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIpInput">SourceIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMacInput">SourceMacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIpInput">TargetIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCode">IcmpCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpType">IcmpType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEnd">PortRangeEnd</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStart">PortRangeStart</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIp">SourceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMac">SourceMac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIp">TargetIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCodeInput"></a>

```go
func IcmpCodeInput() *string
```

- *Type:* *string

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpTypeInput"></a>

```go
func IcmpTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortRangeEndInput`<sup>Optional</sup> <a name="PortRangeEndInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEndInput"></a>

```go
func PortRangeEndInput() *f64
```

- *Type:* *f64

---

##### `PortRangeStartInput`<sup>Optional</sup> <a name="PortRangeStartInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStartInput"></a>

```go
func PortRangeStartInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIpInput"></a>

```go
func SourceIpInput() *string
```

- *Type:* *string

---

##### `SourceMacInput`<sup>Optional</sup> <a name="SourceMacInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMacInput"></a>

```go
func SourceMacInput() *string
```

- *Type:* *string

---

##### `TargetIpInput`<sup>Optional</sup> <a name="TargetIpInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIpInput"></a>

```go
func TargetIpInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCode"></a>

```go
func IcmpCode() *string
```

- *Type:* *string

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpType"></a>

```go
func IcmpType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortRangeEnd`<sup>Required</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEnd"></a>

```go
func PortRangeEnd() *f64
```

- *Type:* *f64

---

##### `PortRangeStart`<sup>Required</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStart"></a>

```go
func PortRangeStart() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIp"></a>

```go
func SourceIp() *string
```

- *Type:* *string

---

##### `SourceMac`<sup>Required</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMac"></a>

```go
func SourceMac() *string
```

- *Type:* *string

---

##### `TargetIp`<sup>Required</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIp"></a>

```go
func TargetIp() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.internalValue"></a>

```go
func InternalValue() CubeServerNicFirewall
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---


### CubeServerNicOutputReference <a name="CubeServerNicOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

cubeserver.NewCubeServerNicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CubeServerNicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall">PutFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcp">ResetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcpv6">ResetDhcpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewall">ResetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallActive">ResetFirewallActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallType">ResetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6Ips">ResetIpv6Ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetSecurityGroupsIds">ResetSecurityGroupsIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFirewall` <a name="PutFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall"></a>

```go
func PutFirewall(value CubeServerNicFirewall)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---

##### `ResetDhcp` <a name="ResetDhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcp"></a>

```go
func ResetDhcp()
```

##### `ResetDhcpv6` <a name="ResetDhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcpv6"></a>

```go
func ResetDhcpv6()
```

##### `ResetFirewall` <a name="ResetFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewall"></a>

```go
func ResetFirewall()
```

##### `ResetFirewallActive` <a name="ResetFirewallActive" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallActive"></a>

```go
func ResetFirewallActive()
```

##### `ResetFirewallType` <a name="ResetFirewallType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallType"></a>

```go
func ResetFirewallType()
```

##### `ResetIps` <a name="ResetIps" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIps"></a>

```go
func ResetIps()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6CidrBlock"></a>

```go
func ResetIpv6CidrBlock()
```

##### `ResetIpv6Ips` <a name="ResetIpv6Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6Ips"></a>

```go
func ResetIpv6Ips()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSecurityGroupsIds` <a name="ResetSecurityGroupsIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetSecurityGroupsIds"></a>

```go
func ResetSecurityGroupsIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.deviceNumber">DeviceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewall">Firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference">CubeServerNicFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.mac">Mac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.pciSlot">PciSlot</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpInput">DhcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6Input">Dhcpv6Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActiveInput">FirewallActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallInput">FirewallInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallTypeInput">FirewallTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipsInput">IpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6IpsInput">Ipv6IpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lanInput">LanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.securityGroupsIdsInput">SecurityGroupsIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6">Dhcpv6</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActive">FirewallActive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallType">FirewallType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6Ips">Ipv6Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lan">Lan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.securityGroupsIds">SecurityGroupsIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceNumber`<sup>Required</sup> <a name="DeviceNumber" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.deviceNumber"></a>

```go
func DeviceNumber() *f64
```

- *Type:* *f64

---

##### `Firewall`<sup>Required</sup> <a name="Firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewall"></a>

```go
func Firewall() CubeServerNicFirewallOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference">CubeServerNicFirewallOutputReference</a>

---

##### `Mac`<sup>Required</sup> <a name="Mac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.mac"></a>

```go
func Mac() *string
```

- *Type:* *string

---

##### `PciSlot`<sup>Required</sup> <a name="PciSlot" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.pciSlot"></a>

```go
func PciSlot() *f64
```

- *Type:* *f64

---

##### `DhcpInput`<sup>Optional</sup> <a name="DhcpInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpInput"></a>

```go
func DhcpInput() interface{}
```

- *Type:* interface{}

---

##### `Dhcpv6Input`<sup>Optional</sup> <a name="Dhcpv6Input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6Input"></a>

```go
func Dhcpv6Input() interface{}
```

- *Type:* interface{}

---

##### `FirewallActiveInput`<sup>Optional</sup> <a name="FirewallActiveInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActiveInput"></a>

```go
func FirewallActiveInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallInput`<sup>Optional</sup> <a name="FirewallInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallInput"></a>

```go
func FirewallInput() CubeServerNicFirewall
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---

##### `FirewallTypeInput`<sup>Optional</sup> <a name="FirewallTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallTypeInput"></a>

```go
func FirewallTypeInput() *string
```

- *Type:* *string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipsInput"></a>

```go
func IpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlockInput"></a>

```go
func Ipv6CidrBlockInput() *string
```

- *Type:* *string

---

##### `Ipv6IpsInput`<sup>Optional</sup> <a name="Ipv6IpsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6IpsInput"></a>

```go
func Ipv6IpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LanInput`<sup>Optional</sup> <a name="LanInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lanInput"></a>

```go
func LanInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecurityGroupsIdsInput`<sup>Optional</sup> <a name="SecurityGroupsIdsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.securityGroupsIdsInput"></a>

```go
func SecurityGroupsIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcp"></a>

```go
func Dhcp() interface{}
```

- *Type:* interface{}

---

##### `Dhcpv6`<sup>Required</sup> <a name="Dhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6"></a>

```go
func Dhcpv6() interface{}
```

- *Type:* interface{}

---

##### `FirewallActive`<sup>Required</sup> <a name="FirewallActive" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActive"></a>

```go
func FirewallActive() interface{}
```

- *Type:* interface{}

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallType"></a>

```go
func FirewallType() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlock"></a>

```go
func Ipv6CidrBlock() *string
```

- *Type:* *string

---

##### `Ipv6Ips`<sup>Required</sup> <a name="Ipv6Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6Ips"></a>

```go
func Ipv6Ips() *[]*string
```

- *Type:* *[]*string

---

##### `Lan`<sup>Required</sup> <a name="Lan" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lan"></a>

```go
func Lan() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecurityGroupsIds`<sup>Required</sup> <a name="SecurityGroupsIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.securityGroupsIds"></a>

```go
func SecurityGroupsIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.internalValue"></a>

```go
func InternalValue() CubeServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---


### CubeServerTimeoutsOutputReference <a name="CubeServerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

cubeserver.NewCubeServerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CubeServerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CubeServerVolumeOutputReference <a name="CubeServerVolumeOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/cubeserver"

cubeserver.NewCubeServerVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CubeServerVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBackupUnitId">ResetBackupUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBus">ResetBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetImagePassword">ResetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetLicenceType">ResetLicenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetSshKeyPath">ResetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetBackupUnitId` <a name="ResetBackupUnitId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBackupUnitId"></a>

```go
func ResetBackupUnitId()
```

##### `ResetBus` <a name="ResetBus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBus"></a>

```go
func ResetBus()
```

##### `ResetImagePassword` <a name="ResetImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetImagePassword"></a>

```go
func ResetImagePassword()
```

##### `ResetLicenceType` <a name="ResetLicenceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetLicenceType"></a>

```go
func ResetLicenceType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSshKeyPath` <a name="ResetSshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetSshKeyPath"></a>

```go
func ResetSshKeyPath()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetUserData"></a>

```go
func ResetUserData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bootServer">BootServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.cpuHotPlug">CpuHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.deviceNumber">DeviceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotPlug">DiscVirtioHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotUnplug">DiscVirtioHotUnplug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotPlug">NicHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotUnplug">NicHotUnplug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.pciSlot">PciSlot</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.ramHotPlug">RamHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitIdInput">BackupUnitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.busInput">BusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePasswordInput">ImagePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceTypeInput">LicenceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPathInput">SshKeyPathInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitId">BackupUnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bus">Bus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceType">LicenceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPath">SshKeyPath</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootServer`<sup>Required</sup> <a name="BootServer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bootServer"></a>

```go
func BootServer() *string
```

- *Type:* *string

---

##### `CpuHotPlug`<sup>Required</sup> <a name="CpuHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.cpuHotPlug"></a>

```go
func CpuHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DeviceNumber`<sup>Required</sup> <a name="DeviceNumber" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.deviceNumber"></a>

```go
func DeviceNumber() *f64
```

- *Type:* *f64

---

##### `DiscVirtioHotPlug`<sup>Required</sup> <a name="DiscVirtioHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotPlug"></a>

```go
func DiscVirtioHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiscVirtioHotUnplug`<sup>Required</sup> <a name="DiscVirtioHotUnplug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotUnplug"></a>

```go
func DiscVirtioHotUnplug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NicHotPlug`<sup>Required</sup> <a name="NicHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotPlug"></a>

```go
func NicHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NicHotUnplug`<sup>Required</sup> <a name="NicHotUnplug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotUnplug"></a>

```go
func NicHotUnplug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PciSlot`<sup>Required</sup> <a name="PciSlot" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.pciSlot"></a>

```go
func PciSlot() *f64
```

- *Type:* *f64

---

##### `RamHotPlug`<sup>Required</sup> <a name="RamHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.ramHotPlug"></a>

```go
func RamHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BackupUnitIdInput`<sup>Optional</sup> <a name="BackupUnitIdInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitIdInput"></a>

```go
func BackupUnitIdInput() *string
```

- *Type:* *string

---

##### `BusInput`<sup>Optional</sup> <a name="BusInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.busInput"></a>

```go
func BusInput() *string
```

- *Type:* *string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `ImagePasswordInput`<sup>Optional</sup> <a name="ImagePasswordInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePasswordInput"></a>

```go
func ImagePasswordInput() *string
```

- *Type:* *string

---

##### `LicenceTypeInput`<sup>Optional</sup> <a name="LicenceTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceTypeInput"></a>

```go
func LicenceTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SshKeyPathInput`<sup>Optional</sup> <a name="SshKeyPathInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPathInput"></a>

```go
func SshKeyPathInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BackupUnitId`<sup>Required</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitId"></a>

```go
func BackupUnitId() *string
```

- *Type:* *string

---

##### `Bus`<sup>Required</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bus"></a>

```go
func Bus() *string
```

- *Type:* *string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `ImagePassword`<sup>Required</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePassword"></a>

```go
func ImagePassword() *string
```

- *Type:* *string

---

##### `LicenceType`<sup>Required</sup> <a name="LicenceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceType"></a>

```go
func LicenceType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SshKeyPath`<sup>Required</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPath"></a>

```go
func SshKeyPath() *[]*string
```

- *Type:* *[]*string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() CubeServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---



