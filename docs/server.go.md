# `server` Submodule <a name="`server` Submodule" id="@cdktf/provider-ionoscloud.server"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Server <a name="Server" id="@cdktf/provider-ionoscloud.server.Server"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server ionoscloud_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.Server.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

server.NewServer(scope Construct, id *string, config ServerConfig) Server
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig">ServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerConfig">ServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.putLabel">PutLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.putNic">PutNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetBootCdrom">ResetBootCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetBootImage">ResetBootImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetCores">ResetCores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetCpuFamily">ResetCpuFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetFirewallruleIds">ResetFirewallruleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetImagePassword">ResetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetNic">ResetNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetRam">ResetRam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetSshKeyPath">ResetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetTemplateUuid">ResetTemplateUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetVmState">ResetVmState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.server.Server.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.server.Server.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.server.Server.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.Server.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.server.Server.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.server.Server.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.server.Server.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.server.Server.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.server.Server.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.server.Server.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.server.Server.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.server.Server.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.server.Server.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.server.Server.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.server.Server.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.server.Server.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.server.Server.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.server.Server.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.server.Server.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.server.Server.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.server.Server.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.server.Server.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.server.Server.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.server.Server.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.server.Server.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.server.Server.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.server.Server.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLabel` <a name="PutLabel" id="@cdktf/provider-ionoscloud.server.Server.putLabel"></a>

```go
func PutLabel(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.Server.putLabel.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNic` <a name="PutNic" id="@cdktf/provider-ionoscloud.server.Server.putNic"></a>

```go
func PutNic(value ServerNic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.server.Server.putTimeouts"></a>

```go
func PutTimeouts(value ServerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.Server.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a>

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-ionoscloud.server.Server.putVolume"></a>

```go
func PutVolume(value ServerVolume)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-ionoscloud.server.Server.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetBootCdrom` <a name="ResetBootCdrom" id="@cdktf/provider-ionoscloud.server.Server.resetBootCdrom"></a>

```go
func ResetBootCdrom()
```

##### `ResetBootImage` <a name="ResetBootImage" id="@cdktf/provider-ionoscloud.server.Server.resetBootImage"></a>

```go
func ResetBootImage()
```

##### `ResetCores` <a name="ResetCores" id="@cdktf/provider-ionoscloud.server.Server.resetCores"></a>

```go
func ResetCores()
```

##### `ResetCpuFamily` <a name="ResetCpuFamily" id="@cdktf/provider-ionoscloud.server.Server.resetCpuFamily"></a>

```go
func ResetCpuFamily()
```

##### `ResetFirewallruleIds` <a name="ResetFirewallruleIds" id="@cdktf/provider-ionoscloud.server.Server.resetFirewallruleIds"></a>

```go
func ResetFirewallruleIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.server.Server.resetId"></a>

```go
func ResetId()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-ionoscloud.server.Server.resetImageName"></a>

```go
func ResetImageName()
```

##### `ResetImagePassword` <a name="ResetImagePassword" id="@cdktf/provider-ionoscloud.server.Server.resetImagePassword"></a>

```go
func ResetImagePassword()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-ionoscloud.server.Server.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetNic` <a name="ResetNic" id="@cdktf/provider-ionoscloud.server.Server.resetNic"></a>

```go
func ResetNic()
```

##### `ResetRam` <a name="ResetRam" id="@cdktf/provider-ionoscloud.server.Server.resetRam"></a>

```go
func ResetRam()
```

##### `ResetSshKeyPath` <a name="ResetSshKeyPath" id="@cdktf/provider-ionoscloud.server.Server.resetSshKeyPath"></a>

```go
func ResetSshKeyPath()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-ionoscloud.server.Server.resetSshKeys"></a>

```go
func ResetSshKeys()
```

##### `ResetTemplateUuid` <a name="ResetTemplateUuid" id="@cdktf/provider-ionoscloud.server.Server.resetTemplateUuid"></a>

```go
func ResetTemplateUuid()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.server.Server.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-ionoscloud.server.Server.resetType"></a>

```go
func ResetType()
```

##### `ResetVmState` <a name="ResetVmState" id="@cdktf/provider-ionoscloud.server.Server.resetVmState"></a>

```go
func ResetVmState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.server.Server.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

server.Server_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.server.Server.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.server.Server.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

server.Server_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.server.Server.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.server.Server.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

server.Server_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.server.Server.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.server.Server.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

server.Server_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.server.Server.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.server.Server.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Server to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.server.Server.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Server that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.server.Server.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Server to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootVolume">BootVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.firewallruleId">FirewallruleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.inlineVolumeIds">InlineVolumeIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.label">Label</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList">ServerLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.nic">Nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference">ServerNicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.primaryIp">PrimaryIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.primaryNic">PrimaryNic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference">ServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference">ServerVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootCdromInput">BootCdromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootImageInput">BootImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.coresInput">CoresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.cpuFamilyInput">CpuFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.firewallruleIdsInput">FirewallruleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.imagePasswordInput">ImagePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.labelInput">LabelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.nicInput">NicInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.ramInput">RamInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.sshKeyPathInput">SshKeyPathInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.templateUuidInput">TemplateUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.vmStateInput">VmStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.volumeInput">VolumeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootCdrom">BootCdrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootImage">BootImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.cores">Cores</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.cpuFamily">CpuFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.firewallruleIds">FirewallruleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.ram">Ram</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.sshKeyPath">SshKeyPath</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.templateUuid">TemplateUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.vmState">VmState</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.server.Server.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.server.Server.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.server.Server.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.server.Server.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.server.Server.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.server.Server.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.server.Server.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.server.Server.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.server.Server.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.server.Server.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.server.Server.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.server.Server.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.server.Server.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.server.Server.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BootVolume`<sup>Required</sup> <a name="BootVolume" id="@cdktf/provider-ionoscloud.server.Server.property.bootVolume"></a>

```go
func BootVolume() *string
```

- *Type:* *string

---

##### `FirewallruleId`<sup>Required</sup> <a name="FirewallruleId" id="@cdktf/provider-ionoscloud.server.Server.property.firewallruleId"></a>

```go
func FirewallruleId() *string
```

- *Type:* *string

---

##### `InlineVolumeIds`<sup>Required</sup> <a name="InlineVolumeIds" id="@cdktf/provider-ionoscloud.server.Server.property.inlineVolumeIds"></a>

```go
func InlineVolumeIds() *[]*string
```

- *Type:* *[]*string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-ionoscloud.server.Server.property.label"></a>

```go
func Label() ServerLabelList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerLabelList">ServerLabelList</a>

---

##### `Nic`<sup>Required</sup> <a name="Nic" id="@cdktf/provider-ionoscloud.server.Server.property.nic"></a>

```go
func Nic() ServerNicOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference">ServerNicOutputReference</a>

---

##### `PrimaryIp`<sup>Required</sup> <a name="PrimaryIp" id="@cdktf/provider-ionoscloud.server.Server.property.primaryIp"></a>

```go
func PrimaryIp() *string
```

- *Type:* *string

---

##### `PrimaryNic`<sup>Required</sup> <a name="PrimaryNic" id="@cdktf/provider-ionoscloud.server.Server.property.primaryNic"></a>

```go
func PrimaryNic() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.server.Server.property.timeouts"></a>

```go
func Timeouts() ServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference">ServerTimeoutsOutputReference</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-ionoscloud.server.Server.property.volume"></a>

```go
func Volume() ServerVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference">ServerVolumeOutputReference</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-ionoscloud.server.Server.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BootCdromInput`<sup>Optional</sup> <a name="BootCdromInput" id="@cdktf/provider-ionoscloud.server.Server.property.bootCdromInput"></a>

```go
func BootCdromInput() *string
```

- *Type:* *string

---

##### `BootImageInput`<sup>Optional</sup> <a name="BootImageInput" id="@cdktf/provider-ionoscloud.server.Server.property.bootImageInput"></a>

```go
func BootImageInput() *string
```

- *Type:* *string

---

##### `CoresInput`<sup>Optional</sup> <a name="CoresInput" id="@cdktf/provider-ionoscloud.server.Server.property.coresInput"></a>

```go
func CoresInput() *f64
```

- *Type:* *f64

---

##### `CpuFamilyInput`<sup>Optional</sup> <a name="CpuFamilyInput" id="@cdktf/provider-ionoscloud.server.Server.property.cpuFamilyInput"></a>

```go
func CpuFamilyInput() *string
```

- *Type:* *string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.server.Server.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `FirewallruleIdsInput`<sup>Optional</sup> <a name="FirewallruleIdsInput" id="@cdktf/provider-ionoscloud.server.Server.property.firewallruleIdsInput"></a>

```go
func FirewallruleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.server.Server.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-ionoscloud.server.Server.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `ImagePasswordInput`<sup>Optional</sup> <a name="ImagePasswordInput" id="@cdktf/provider-ionoscloud.server.Server.property.imagePasswordInput"></a>

```go
func ImagePasswordInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-ionoscloud.server.Server.property.labelInput"></a>

```go
func LabelInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.server.Server.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NicInput`<sup>Optional</sup> <a name="NicInput" id="@cdktf/provider-ionoscloud.server.Server.property.nicInput"></a>

```go
func NicInput() ServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

---

##### `RamInput`<sup>Optional</sup> <a name="RamInput" id="@cdktf/provider-ionoscloud.server.Server.property.ramInput"></a>

```go
func RamInput() *f64
```

- *Type:* *f64

---

##### `SshKeyPathInput`<sup>Optional</sup> <a name="SshKeyPathInput" id="@cdktf/provider-ionoscloud.server.Server.property.sshKeyPathInput"></a>

```go
func SshKeyPathInput() *[]*string
```

- *Type:* *[]*string

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-ionoscloud.server.Server.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TemplateUuidInput`<sup>Optional</sup> <a name="TemplateUuidInput" id="@cdktf/provider-ionoscloud.server.Server.property.templateUuidInput"></a>

```go
func TemplateUuidInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.server.Server.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.server.Server.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VmStateInput`<sup>Optional</sup> <a name="VmStateInput" id="@cdktf/provider-ionoscloud.server.Server.property.vmStateInput"></a>

```go
func VmStateInput() *string
```

- *Type:* *string

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-ionoscloud.server.Server.property.volumeInput"></a>

```go
func VolumeInput() ServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.server.Server.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BootCdrom`<sup>Required</sup> <a name="BootCdrom" id="@cdktf/provider-ionoscloud.server.Server.property.bootCdrom"></a>

```go
func BootCdrom() *string
```

- *Type:* *string

---

##### `BootImage`<sup>Required</sup> <a name="BootImage" id="@cdktf/provider-ionoscloud.server.Server.property.bootImage"></a>

```go
func BootImage() *string
```

- *Type:* *string

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.server.Server.property.cores"></a>

```go
func Cores() *f64
```

- *Type:* *f64

---

##### `CpuFamily`<sup>Required</sup> <a name="CpuFamily" id="@cdktf/provider-ionoscloud.server.Server.property.cpuFamily"></a>

```go
func CpuFamily() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.server.Server.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `FirewallruleIds`<sup>Required</sup> <a name="FirewallruleIds" id="@cdktf/provider-ionoscloud.server.Server.property.firewallruleIds"></a>

```go
func FirewallruleIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.server.Server.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-ionoscloud.server.Server.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `ImagePassword`<sup>Required</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.server.Server.property.imagePassword"></a>

```go
func ImagePassword() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.server.Server.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.server.Server.property.ram"></a>

```go
func Ram() *f64
```

- *Type:* *f64

---

##### `SshKeyPath`<sup>Required</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.server.Server.property.sshKeyPath"></a>

```go
func SshKeyPath() *[]*string
```

- *Type:* *[]*string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-ionoscloud.server.Server.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `TemplateUuid`<sup>Required</sup> <a name="TemplateUuid" id="@cdktf/provider-ionoscloud.server.Server.property.templateUuid"></a>

```go
func TemplateUuid() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.server.Server.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VmState`<sup>Required</sup> <a name="VmState" id="@cdktf/provider-ionoscloud.server.Server.property.vmState"></a>

```go
func VmState() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.server.Server.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerConfig <a name="ServerConfig" id="@cdktf/provider-ionoscloud.server.ServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

&server.ServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatacenterId: *string,
	Name: *string,
	Volume: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.server.ServerVolume,
	AvailabilityZone: *string,
	BootCdrom: *string,
	BootImage: *string,
	Cores: *f64,
	CpuFamily: *string,
	FirewallruleIds: *[]*string,
	Id: *string,
	ImageName: *string,
	ImagePassword: *string,
	Label: interface{},
	Nic: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.server.ServerNic,
	Ram: *f64,
	SshKeyPath: *[]*string,
	SshKeys: *[]*string,
	TemplateUuid: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.server.ServerTimeouts,
	Type: *string,
	VmState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#datacenter_id Server#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#name Server#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#availability_zone Server#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.bootCdrom">BootCdrom</a></code> | <code>*string</code> | The associated boot drive, if any. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.bootImage">BootImage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#boot_image Server#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.cores">Cores</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#cores Server#cores}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.cpuFamily">CpuFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#cpu_family Server#cpu_family}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.firewallruleIds">FirewallruleIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#firewallrule_ids Server#firewallrule_ids}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#image_name Server#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#image_password Server#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.label">Label</a></code> | <code>interface{}</code> | label block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.nic">Nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.ram">Ram</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#ram Server#ram}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.sshKeyPath">SshKeyPath</a></code> | <code>*[]*string</code> | Immutable List of absolute or relative paths to files containing public SSH key that will be injected into IonosCloud provided Linux images. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.templateUuid">TemplateUuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#template_uuid Server#template_uuid}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.type">Type</a></code> | <code>*string</code> | server usages: ENTERPRISE or CUBE. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.vmState">VmState</a></code> | <code>*string</code> | Sets the power state of the server. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#datacenter_id Server#datacenter_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#name Server#name}.

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.volume"></a>

```go
Volume ServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#volume Server#volume}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#availability_zone Server#availability_zone}.

---

##### `BootCdrom`<sup>Optional</sup> <a name="BootCdrom" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.bootCdrom"></a>

```go
BootCdrom *string
```

- *Type:* *string

The associated boot drive, if any.

Must be the UUID of a bootable CDROM image that you can retrieve using the image data source

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#boot_cdrom Server#boot_cdrom}

---

##### `BootImage`<sup>Optional</sup> <a name="BootImage" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.bootImage"></a>

```go
BootImage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#boot_image Server#boot_image}.

---

##### `Cores`<sup>Optional</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.cores"></a>

```go
Cores *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#cores Server#cores}.

---

##### `CpuFamily`<sup>Optional</sup> <a name="CpuFamily" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.cpuFamily"></a>

```go
CpuFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#cpu_family Server#cpu_family}.

---

##### `FirewallruleIds`<sup>Optional</sup> <a name="FirewallruleIds" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.firewallruleIds"></a>

```go
FirewallruleIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#firewallrule_ids Server#firewallrule_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#image_name Server#image_name}.

---

##### `ImagePassword`<sup>Optional</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.imagePassword"></a>

```go
ImagePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#image_password Server#image_password}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.label"></a>

```go
Label interface{}
```

- *Type:* interface{}

label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#label Server#label}

---

##### `Nic`<sup>Optional</sup> <a name="Nic" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.nic"></a>

```go
Nic ServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#nic Server#nic}

---

##### `Ram`<sup>Optional</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.ram"></a>

```go
Ram *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#ram Server#ram}.

---

##### `SshKeyPath`<sup>Optional</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.sshKeyPath"></a>

```go
SshKeyPath *[]*string
```

- *Type:* *[]*string

Immutable List of absolute or relative paths to files containing public SSH key that will be injected into IonosCloud provided Linux images.

Does not support `~` expansion to homedir in the given path. Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation. This property is immutable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#ssh_key_path Server#ssh_key_path}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#ssh_keys Server#ssh_keys}

---

##### `TemplateUuid`<sup>Optional</sup> <a name="TemplateUuid" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.templateUuid"></a>

```go
TemplateUuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#template_uuid Server#template_uuid}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.timeouts"></a>

```go
Timeouts ServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#timeouts Server#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

server usages: ENTERPRISE or CUBE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#type Server#type}

---

##### `VmState`<sup>Optional</sup> <a name="VmState" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.vmState"></a>

```go
VmState *string
```

- *Type:* *string

Sets the power state of the server.

Possible values: `RUNNING`, `SHUTOFF` or `SUSPENDED`. SUSPENDED state is only valid for cube. SHUTOFF state is only valid for enterprise

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#vm_state Server#vm_state}

---

### ServerLabel <a name="ServerLabel" id="@cdktf/provider-ionoscloud.server.ServerLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerLabel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

&server.ServerLabel {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabel.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#key Server#key}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabel.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#value Server#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-ionoscloud.server.ServerLabel.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#key Server#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.server.ServerLabel.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#value Server#value}.

---

### ServerNic <a name="ServerNic" id="@cdktf/provider-ionoscloud.server.ServerNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerNic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

&server.ServerNic {
	Lan: *f64,
	Dhcp: interface{},
	Dhcpv6: interface{},
	Firewall: interface{},
	FirewallActive: interface{},
	FirewallType: *string,
	Ips: *[]*string,
	Ipv6CidrBlock: *string,
	Ipv6Ips: *[]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.lan">Lan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#lan Server#lan}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#dhcp Server#dhcp}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.dhcpv6">Dhcpv6</a></code> | <code>interface{}</code> | Indicates whether this NIC receives an IPv6 address through DHCP. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.firewall">Firewall</a></code> | <code>interface{}</code> | firewall block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.firewallActive">FirewallActive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#firewall_active Server#firewall_active}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.firewallType">FirewallType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#firewall_type Server#firewall_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.ips">Ips</a></code> | <code>*[]*string</code> | Collection of IP addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | IPv6 CIDR block assigned to the NIC. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.ipv6Ips">Ipv6Ips</a></code> | <code>*[]*string</code> | Collection for IPv6 addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#name Server#name}. |

---

##### `Lan`<sup>Required</sup> <a name="Lan" id="@cdktf/provider-ionoscloud.server.ServerNic.property.lan"></a>

```go
Lan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#lan Server#lan}.

---

##### `Dhcp`<sup>Optional</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.server.ServerNic.property.dhcp"></a>

```go
Dhcp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#dhcp Server#dhcp}.

---

##### `Dhcpv6`<sup>Optional</sup> <a name="Dhcpv6" id="@cdktf/provider-ionoscloud.server.ServerNic.property.dhcpv6"></a>

```go
Dhcpv6 interface{}
```

- *Type:* interface{}

Indicates whether this NIC receives an IPv6 address through DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#dhcpv6 Server#dhcpv6}

---

##### `Firewall`<sup>Optional</sup> <a name="Firewall" id="@cdktf/provider-ionoscloud.server.ServerNic.property.firewall"></a>

```go
Firewall interface{}
```

- *Type:* interface{}

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#firewall Server#firewall}

---

##### `FirewallActive`<sup>Optional</sup> <a name="FirewallActive" id="@cdktf/provider-ionoscloud.server.ServerNic.property.firewallActive"></a>

```go
FirewallActive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#firewall_active Server#firewall_active}.

---

##### `FirewallType`<sup>Optional</sup> <a name="FirewallType" id="@cdktf/provider-ionoscloud.server.ServerNic.property.firewallType"></a>

```go
FirewallType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#firewall_type Server#firewall_type}.

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.server.ServerNic.property.ips"></a>

```go
Ips *[]*string
```

- *Type:* *[]*string

Collection of IP addresses assigned to a nic.

Explicitly assigned public IPs need to come from reserved IP blocks, Passing value null or empty array will assign an IP address automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#ips Server#ips}

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-ionoscloud.server.ServerNic.property.ipv6CidrBlock"></a>

```go
Ipv6CidrBlock *string
```

- *Type:* *string

IPv6 CIDR block assigned to the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#ipv6_cidr_block Server#ipv6_cidr_block}

---

##### `Ipv6Ips`<sup>Optional</sup> <a name="Ipv6Ips" id="@cdktf/provider-ionoscloud.server.ServerNic.property.ipv6Ips"></a>

```go
Ipv6Ips *[]*string
```

- *Type:* *[]*string

Collection for IPv6 addresses assigned to a nic.

Explicitly assigned IPv6 addresses need to come from inside the IPv6 CIDR block assigned to the nic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#ipv6_ips Server#ipv6_ips}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.server.ServerNic.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#name Server#name}.

---

### ServerNicFirewall <a name="ServerNicFirewall" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

&server.ServerNicFirewall {
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
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#protocol Server#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.icmpCode">IcmpCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#icmp_code Server#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.icmpType">IcmpType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#icmp_type Server#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#name Server#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.portRangeEnd">PortRangeEnd</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#port_range_end Server#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.portRangeStart">PortRangeStart</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#port_range_start Server#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.sourceIp">SourceIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#source_ip Server#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.sourceMac">SourceMac</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#source_mac Server#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.targetIp">TargetIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#target_ip Server#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#type Server#type}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#protocol Server#protocol}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.icmpCode"></a>

```go
IcmpCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#icmp_code Server#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.icmpType"></a>

```go
IcmpType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#icmp_type Server#icmp_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#name Server#name}.

---

##### `PortRangeEnd`<sup>Optional</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.portRangeEnd"></a>

```go
PortRangeEnd *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#port_range_end Server#port_range_end}.

---

##### `PortRangeStart`<sup>Optional</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.portRangeStart"></a>

```go
PortRangeStart *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#port_range_start Server#port_range_start}.

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.sourceIp"></a>

```go
SourceIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#source_ip Server#source_ip}.

---

##### `SourceMac`<sup>Optional</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.sourceMac"></a>

```go
SourceMac *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#source_mac Server#source_mac}.

---

##### `TargetIp`<sup>Optional</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.targetIp"></a>

```go
TargetIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#target_ip Server#target_ip}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#type Server#type}.

---

### ServerTimeouts <a name="ServerTimeouts" id="@cdktf/provider-ionoscloud.server.ServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

&server.ServerTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#create Server#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#default Server#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#delete Server#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#update Server#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#create Server#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#default Server#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#delete Server#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#update Server#update}.

---

### ServerVolume <a name="ServerVolume" id="@cdktf/provider-ionoscloud.server.ServerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

&server.ServerVolume {
	DiskType: *string,
	AvailabilityZone: *string,
	BackupUnitId: *string,
	Bus: *string,
	ImagePassword: *string,
	LicenceType: *string,
	Name: *string,
	Size: *f64,
	SshKeyPath: *[]*string,
	SshKeys: *[]*string,
	UserData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.diskType">DiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#disk_type Server#disk_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#availability_zone Server#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.backupUnitId">BackupUnitId</a></code> | <code>*string</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.bus">Bus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#bus Server#bus}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#image_password Server#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.licenceType">LicenceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#licence_type Server#licence_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#name Server#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.size">Size</a></code> | <code>*f64</code> | The size of the volume in GB. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.sshKeyPath">SshKeyPath</a></code> | <code>*[]*string</code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.userData">UserData</a></code> | <code>*string</code> | The cloud-init configuration for the volume as base64 encoded string. |

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#disk_type Server#disk_type}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#availability_zone Server#availability_zone}.

---

##### `BackupUnitId`<sup>Optional</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.backupUnitId"></a>

```go
BackupUnitId *string
```

- *Type:* *string

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#backup_unit_id Server#backup_unit_id}

---

##### `Bus`<sup>Optional</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.bus"></a>

```go
Bus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#bus Server#bus}.

---

##### `ImagePassword`<sup>Optional</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.imagePassword"></a>

```go
ImagePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#image_password Server#image_password}.

---

##### `LicenceType`<sup>Optional</sup> <a name="LicenceType" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.licenceType"></a>

```go
LicenceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#licence_type Server#licence_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#name Server#name}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

The size of the volume in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#size Server#size}

---

##### `SshKeyPath`<sup>Optional</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.sshKeyPath"></a>

```go
SshKeyPath *[]*string
```

- *Type:* *[]*string

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#ssh_key_path Server#ssh_key_path}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#ssh_keys Server#ssh_keys}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/resources/server#user_data Server#user_data}

---

## Classes <a name="Classes" id="Classes"></a>

### ServerLabelList <a name="ServerLabelList" id="@cdktf/provider-ionoscloud.server.ServerLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

server.NewServerLabelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServerLabelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.server.ServerLabelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.server.ServerLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.server.ServerLabelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.server.ServerLabelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerLabelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.server.ServerLabelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.server.ServerLabelList.get"></a>

```go
func Get(index *f64) ServerLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.server.ServerLabelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.server.ServerLabelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.server.ServerLabelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.server.ServerLabelList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerLabelOutputReference <a name="ServerLabelOutputReference" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

server.NewServerLabelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServerLabelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerNicFirewallList <a name="ServerNicFirewallList" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

server.NewServerNicFirewallList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServerNicFirewallList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.get"></a>

```go
func Get(index *f64) ServerNicFirewallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerNicFirewallOutputReference <a name="ServerNicFirewallOutputReference" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

server.NewServerNicFirewallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServerNicFirewallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetPortRangeEnd">ResetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetPortRangeStart">ResetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetSourceMac">ResetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetTargetIp">ResetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetIcmpCode"></a>

```go
func ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetIcmpType"></a>

```go
func ResetIcmpType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPortRangeEnd` <a name="ResetPortRangeEnd" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetPortRangeEnd"></a>

```go
func ResetPortRangeEnd()
```

##### `ResetPortRangeStart` <a name="ResetPortRangeStart" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetPortRangeStart"></a>

```go
func ResetPortRangeStart()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetSourceIp"></a>

```go
func ResetSourceIp()
```

##### `ResetSourceMac` <a name="ResetSourceMac" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetSourceMac"></a>

```go
func ResetSourceMac()
```

##### `ResetTargetIp` <a name="ResetTargetIp" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetTargetIp"></a>

```go
func ResetTargetIp()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeEndInput">PortRangeEndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeStartInput">PortRangeStartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceIpInput">SourceIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceMacInput">SourceMacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.targetIpInput">TargetIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpCode">IcmpCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpType">IcmpType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeEnd">PortRangeEnd</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeStart">PortRangeStart</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceIp">SourceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceMac">SourceMac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.targetIp">TargetIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpCodeInput"></a>

```go
func IcmpCodeInput() *string
```

- *Type:* *string

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpTypeInput"></a>

```go
func IcmpTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortRangeEndInput`<sup>Optional</sup> <a name="PortRangeEndInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeEndInput"></a>

```go
func PortRangeEndInput() *f64
```

- *Type:* *f64

---

##### `PortRangeStartInput`<sup>Optional</sup> <a name="PortRangeStartInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeStartInput"></a>

```go
func PortRangeStartInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceIpInput"></a>

```go
func SourceIpInput() *string
```

- *Type:* *string

---

##### `SourceMacInput`<sup>Optional</sup> <a name="SourceMacInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceMacInput"></a>

```go
func SourceMacInput() *string
```

- *Type:* *string

---

##### `TargetIpInput`<sup>Optional</sup> <a name="TargetIpInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.targetIpInput"></a>

```go
func TargetIpInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpCode"></a>

```go
func IcmpCode() *string
```

- *Type:* *string

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpType"></a>

```go
func IcmpType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortRangeEnd`<sup>Required</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeEnd"></a>

```go
func PortRangeEnd() *f64
```

- *Type:* *f64

---

##### `PortRangeStart`<sup>Required</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeStart"></a>

```go
func PortRangeStart() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceIp"></a>

```go
func SourceIp() *string
```

- *Type:* *string

---

##### `SourceMac`<sup>Required</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceMac"></a>

```go
func SourceMac() *string
```

- *Type:* *string

---

##### `TargetIp`<sup>Required</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.targetIp"></a>

```go
func TargetIp() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerNicOutputReference <a name="ServerNicOutputReference" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

server.NewServerNicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServerNicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.putFirewall">PutFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetDhcp">ResetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetDhcpv6">ResetDhcpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewall">ResetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewallActive">ResetFirewallActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewallType">ResetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIpv6Ips">ResetIpv6Ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFirewall` <a name="PutFirewall" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.putFirewall"></a>

```go
func PutFirewall(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.putFirewall.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDhcp` <a name="ResetDhcp" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetDhcp"></a>

```go
func ResetDhcp()
```

##### `ResetDhcpv6` <a name="ResetDhcpv6" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetDhcpv6"></a>

```go
func ResetDhcpv6()
```

##### `ResetFirewall` <a name="ResetFirewall" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewall"></a>

```go
func ResetFirewall()
```

##### `ResetFirewallActive` <a name="ResetFirewallActive" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewallActive"></a>

```go
func ResetFirewallActive()
```

##### `ResetFirewallType` <a name="ResetFirewallType" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewallType"></a>

```go
func ResetFirewallType()
```

##### `ResetIps` <a name="ResetIps" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIps"></a>

```go
func ResetIps()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIpv6CidrBlock"></a>

```go
func ResetIpv6CidrBlock()
```

##### `ResetIpv6Ips` <a name="ResetIpv6Ips" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIpv6Ips"></a>

```go
func ResetIpv6Ips()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.deviceNumber">DeviceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewall">Firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList">ServerNicFirewallList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.mac">Mac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.pciSlot">PciSlot</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpInput">DhcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpv6Input">Dhcpv6Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallActiveInput">FirewallActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallInput">FirewallInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallTypeInput">FirewallTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipsInput">IpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6IpsInput">Ipv6IpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.lanInput">LanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpv6">Dhcpv6</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallActive">FirewallActive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallType">FirewallType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6Ips">Ipv6Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.lan">Lan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceNumber`<sup>Required</sup> <a name="DeviceNumber" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.deviceNumber"></a>

```go
func DeviceNumber() *f64
```

- *Type:* *f64

---

##### `Firewall`<sup>Required</sup> <a name="Firewall" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewall"></a>

```go
func Firewall() ServerNicFirewallList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList">ServerNicFirewallList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mac`<sup>Required</sup> <a name="Mac" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.mac"></a>

```go
func Mac() *string
```

- *Type:* *string

---

##### `PciSlot`<sup>Required</sup> <a name="PciSlot" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.pciSlot"></a>

```go
func PciSlot() *f64
```

- *Type:* *f64

---

##### `DhcpInput`<sup>Optional</sup> <a name="DhcpInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpInput"></a>

```go
func DhcpInput() interface{}
```

- *Type:* interface{}

---

##### `Dhcpv6Input`<sup>Optional</sup> <a name="Dhcpv6Input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpv6Input"></a>

```go
func Dhcpv6Input() interface{}
```

- *Type:* interface{}

---

##### `FirewallActiveInput`<sup>Optional</sup> <a name="FirewallActiveInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallActiveInput"></a>

```go
func FirewallActiveInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallInput`<sup>Optional</sup> <a name="FirewallInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallInput"></a>

```go
func FirewallInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallTypeInput`<sup>Optional</sup> <a name="FirewallTypeInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallTypeInput"></a>

```go
func FirewallTypeInput() *string
```

- *Type:* *string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipsInput"></a>

```go
func IpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6CidrBlockInput"></a>

```go
func Ipv6CidrBlockInput() *string
```

- *Type:* *string

---

##### `Ipv6IpsInput`<sup>Optional</sup> <a name="Ipv6IpsInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6IpsInput"></a>

```go
func Ipv6IpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LanInput`<sup>Optional</sup> <a name="LanInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.lanInput"></a>

```go
func LanInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcp"></a>

```go
func Dhcp() interface{}
```

- *Type:* interface{}

---

##### `Dhcpv6`<sup>Required</sup> <a name="Dhcpv6" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpv6"></a>

```go
func Dhcpv6() interface{}
```

- *Type:* interface{}

---

##### `FirewallActive`<sup>Required</sup> <a name="FirewallActive" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallActive"></a>

```go
func FirewallActive() interface{}
```

- *Type:* interface{}

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallType"></a>

```go
func FirewallType() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6CidrBlock"></a>

```go
func Ipv6CidrBlock() *string
```

- *Type:* *string

---

##### `Ipv6Ips`<sup>Required</sup> <a name="Ipv6Ips" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6Ips"></a>

```go
func Ipv6Ips() *[]*string
```

- *Type:* *[]*string

---

##### `Lan`<sup>Required</sup> <a name="Lan" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.lan"></a>

```go
func Lan() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.internalValue"></a>

```go
func InternalValue() ServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

---


### ServerTimeoutsOutputReference <a name="ServerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

server.NewServerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerVolumeOutputReference <a name="ServerVolumeOutputReference" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/server"

server.NewServerVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServerVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetBackupUnitId">ResetBackupUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetBus">ResetBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetImagePassword">ResetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetLicenceType">ResetLicenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSshKeyPath">ResetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetBackupUnitId` <a name="ResetBackupUnitId" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetBackupUnitId"></a>

```go
func ResetBackupUnitId()
```

##### `ResetBus` <a name="ResetBus" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetBus"></a>

```go
func ResetBus()
```

##### `ResetImagePassword` <a name="ResetImagePassword" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetImagePassword"></a>

```go
func ResetImagePassword()
```

##### `ResetLicenceType` <a name="ResetLicenceType" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetLicenceType"></a>

```go
func ResetLicenceType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSize"></a>

```go
func ResetSize()
```

##### `ResetSshKeyPath` <a name="ResetSshKeyPath" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSshKeyPath"></a>

```go
func ResetSshKeyPath()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSshKeys"></a>

```go
func ResetSshKeys()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetUserData"></a>

```go
func ResetUserData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.bootServer">BootServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.cpuHotPlug">CpuHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.deviceNumber">DeviceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.discVirtioHotPlug">DiscVirtioHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.discVirtioHotUnplug">DiscVirtioHotUnplug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nicHotPlug">NicHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nicHotUnplug">NicHotUnplug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.pciSlot">PciSlot</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.ramHotPlug">RamHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.backupUnitIdInput">BackupUnitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.busInput">BusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.imagePasswordInput">ImagePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.licenceTypeInput">LicenceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeyPathInput">SshKeyPathInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.backupUnitId">BackupUnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.bus">Bus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.licenceType">LicenceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeyPath">SshKeyPath</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootServer`<sup>Required</sup> <a name="BootServer" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.bootServer"></a>

```go
func BootServer() *string
```

- *Type:* *string

---

##### `CpuHotPlug`<sup>Required</sup> <a name="CpuHotPlug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.cpuHotPlug"></a>

```go
func CpuHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DeviceNumber`<sup>Required</sup> <a name="DeviceNumber" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.deviceNumber"></a>

```go
func DeviceNumber() *f64
```

- *Type:* *f64

---

##### `DiscVirtioHotPlug`<sup>Required</sup> <a name="DiscVirtioHotPlug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.discVirtioHotPlug"></a>

```go
func DiscVirtioHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiscVirtioHotUnplug`<sup>Required</sup> <a name="DiscVirtioHotUnplug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.discVirtioHotUnplug"></a>

```go
func DiscVirtioHotUnplug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NicHotPlug`<sup>Required</sup> <a name="NicHotPlug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nicHotPlug"></a>

```go
func NicHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NicHotUnplug`<sup>Required</sup> <a name="NicHotUnplug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nicHotUnplug"></a>

```go
func NicHotUnplug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PciSlot`<sup>Required</sup> <a name="PciSlot" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.pciSlot"></a>

```go
func PciSlot() *f64
```

- *Type:* *f64

---

##### `RamHotPlug`<sup>Required</sup> <a name="RamHotPlug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.ramHotPlug"></a>

```go
func RamHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BackupUnitIdInput`<sup>Optional</sup> <a name="BackupUnitIdInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.backupUnitIdInput"></a>

```go
func BackupUnitIdInput() *string
```

- *Type:* *string

---

##### `BusInput`<sup>Optional</sup> <a name="BusInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.busInput"></a>

```go
func BusInput() *string
```

- *Type:* *string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `ImagePasswordInput`<sup>Optional</sup> <a name="ImagePasswordInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.imagePasswordInput"></a>

```go
func ImagePasswordInput() *string
```

- *Type:* *string

---

##### `LicenceTypeInput`<sup>Optional</sup> <a name="LicenceTypeInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.licenceTypeInput"></a>

```go
func LicenceTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `SshKeyPathInput`<sup>Optional</sup> <a name="SshKeyPathInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeyPathInput"></a>

```go
func SshKeyPathInput() *[]*string
```

- *Type:* *[]*string

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BackupUnitId`<sup>Required</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.backupUnitId"></a>

```go
func BackupUnitId() *string
```

- *Type:* *string

---

##### `Bus`<sup>Required</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.bus"></a>

```go
func Bus() *string
```

- *Type:* *string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `ImagePassword`<sup>Required</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.imagePassword"></a>

```go
func ImagePassword() *string
```

- *Type:* *string

---

##### `LicenceType`<sup>Required</sup> <a name="LicenceType" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.licenceType"></a>

```go
func LicenceType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `SshKeyPath`<sup>Required</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeyPath"></a>

```go
func SshKeyPath() *[]*string
```

- *Type:* *[]*string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() ServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

---



