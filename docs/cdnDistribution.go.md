# `cdnDistribution` Submodule <a name="`cdnDistribution` Submodule" id="@cdktf/provider-ionoscloud.cdnDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnDistribution <a name="CdnDistribution" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution ionoscloud_cdn_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

cdndistribution.NewCdnDistribution(scope Construct, id *string, config CdnDistributionConfig) CdnDistribution
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig">CdnDistributionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig">CdnDistributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putRoutingRules">PutRoutingRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoutingRules` <a name="PutRoutingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putRoutingRules"></a>

```go
func PutRoutingRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putRoutingRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts"></a>

```go
func PutTimeouts(value CdnDistributionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a>

---

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetCertificateId"></a>

```go
func ResetCertificateId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CdnDistribution resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

cdndistribution.CdnDistribution_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

cdndistribution.CdnDistribution_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

cdndistribution.CdnDistribution_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

cdndistribution.CdnDistribution_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CdnDistribution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CdnDistribution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CdnDistribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CdnDistribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV4">PublicEndpointV4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV6">PublicEndpointV6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.resourceUrn">ResourceUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRules">RoutingRules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList">CdnDistributionRoutingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference">CdnDistributionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRulesInput">RoutingRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PublicEndpointV4`<sup>Required</sup> <a name="PublicEndpointV4" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV4"></a>

```go
func PublicEndpointV4() *string
```

- *Type:* *string

---

##### `PublicEndpointV6`<sup>Required</sup> <a name="PublicEndpointV6" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV6"></a>

```go
func PublicEndpointV6() *string
```

- *Type:* *string

---

##### `ResourceUrn`<sup>Required</sup> <a name="ResourceUrn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.resourceUrn"></a>

```go
func ResourceUrn() *string
```

- *Type:* *string

---

##### `RoutingRules`<sup>Required</sup> <a name="RoutingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRules"></a>

```go
func RoutingRules() CdnDistributionRoutingRulesList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList">CdnDistributionRoutingRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeouts"></a>

```go
func Timeouts() CdnDistributionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference">CdnDistributionTimeoutsOutputReference</a>

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RoutingRulesInput`<sup>Optional</sup> <a name="RoutingRulesInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRulesInput"></a>

```go
func RoutingRulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnDistributionConfig <a name="CdnDistributionConfig" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

&cdndistribution.CdnDistributionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Domain: *string,
	RoutingRules: interface{},
	CertificateId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.cdnDistribution.CdnDistributionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.domain">Domain</a></code> | <code>*string</code> | The domain of the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.routingRules">RoutingRules</a></code> | <code>interface{}</code> | routing_rules block. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.certificateId">CertificateId</a></code> | <code>*string</code> | The ID of the certificate to use for the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#id CdnDistribution#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The domain of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#domain CdnDistribution#domain}

---

##### `RoutingRules`<sup>Required</sup> <a name="RoutingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.routingRules"></a>

```go
RoutingRules interface{}
```

- *Type:* interface{}

routing_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#routing_rules CdnDistribution#routing_rules}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

The ID of the certificate to use for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#certificate_id CdnDistribution#certificate_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#id CdnDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.timeouts"></a>

```go
Timeouts CdnDistributionTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#timeouts CdnDistribution#timeouts}

---

### CdnDistributionRoutingRules <a name="CdnDistributionRoutingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

&cdndistribution.CdnDistributionRoutingRules {
	Prefix: *string,
	Scheme: *string,
	Upstream: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.cdnDistribution.CdnDistributionRoutingRulesUpstream,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.prefix">Prefix</a></code> | <code>*string</code> | The prefix of the routing rule. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.scheme">Scheme</a></code> | <code>*string</code> | The scheme of the routing rule. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.upstream">Upstream</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a></code> | upstream block. |

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The prefix of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#prefix CdnDistribution#prefix}

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

The scheme of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#scheme CdnDistribution#scheme}

---

##### `Upstream`<sup>Required</sup> <a name="Upstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.upstream"></a>

```go
Upstream CdnDistributionRoutingRulesUpstream
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

upstream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#upstream CdnDistribution#upstream}

---

### CdnDistributionRoutingRulesUpstream <a name="CdnDistributionRoutingRulesUpstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

&cdndistribution.CdnDistributionRoutingRulesUpstream {
	Caching: interface{},
	Host: *string,
	RateLimitClass: *string,
	SniMode: *string,
	Waf: interface{},
	GeoRestrictions: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.caching">Caching</a></code> | <code>interface{}</code> | Enable or disable caching. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.host">Host</a></code> | <code>*string</code> | The upstream host that handles the requests if not already cached. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.rateLimitClass">RateLimitClass</a></code> | <code>*string</code> | Rate limit class that will be applied to limit the number of incoming requests per IP. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.sniMode">SniMode</a></code> | <code>*string</code> | The SNI (Server Name Indication) mode of the upstream host. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.waf">Waf</a></code> | <code>interface{}</code> | Enable or disable WAF to protect the upstream host. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.geoRestrictions">GeoRestrictions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | geo_restrictions block. |

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.caching"></a>

```go
Caching interface{}
```

- *Type:* interface{}

Enable or disable caching.

If enabled, the CDN will cache the responses from the upstream host. Subsequent requests for the same resource will be served from the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#caching CdnDistribution#caching}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.host"></a>

```go
Host *string
```

- *Type:* *string

The upstream host that handles the requests if not already cached.

This host will be protected by the WAF if the option is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#host CdnDistribution#host}

---

##### `RateLimitClass`<sup>Required</sup> <a name="RateLimitClass" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.rateLimitClass"></a>

```go
RateLimitClass *string
```

- *Type:* *string

Rate limit class that will be applied to limit the number of incoming requests per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#rate_limit_class CdnDistribution#rate_limit_class}

---

##### `SniMode`<sup>Required</sup> <a name="SniMode" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.sniMode"></a>

```go
SniMode *string
```

- *Type:* *string

The SNI (Server Name Indication) mode of the upstream host.

It supports two modes: 'distribution' and 'origin', for more information about these modes please check the resource docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#sni_mode CdnDistribution#sni_mode}

---

##### `Waf`<sup>Required</sup> <a name="Waf" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.waf"></a>

```go
Waf interface{}
```

- *Type:* interface{}

Enable or disable WAF to protect the upstream host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#waf CdnDistribution#waf}

---

##### `GeoRestrictions`<sup>Optional</sup> <a name="GeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.geoRestrictions"></a>

```go
GeoRestrictions CdnDistributionRoutingRulesUpstreamGeoRestrictions
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

geo_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#geo_restrictions CdnDistribution#geo_restrictions}

---

### CdnDistributionRoutingRulesUpstreamGeoRestrictions <a name="CdnDistributionRoutingRulesUpstreamGeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

&cdndistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions {
	AllowList: *[]*string,
	BlockList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.allowList">AllowList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#allow_list CdnDistribution#allow_list}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.blockList">BlockList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#block_list CdnDistribution#block_list}. |

---

##### `AllowList`<sup>Optional</sup> <a name="AllowList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.allowList"></a>

```go
AllowList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#allow_list CdnDistribution#allow_list}.

---

##### `BlockList`<sup>Optional</sup> <a name="BlockList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.blockList"></a>

```go
BlockList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#block_list CdnDistribution#block_list}.

---

### CdnDistributionTimeouts <a name="CdnDistributionTimeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

&cdndistribution.CdnDistributionTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#create CdnDistribution#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#default CdnDistribution#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#delete CdnDistribution#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#update CdnDistribution#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#create CdnDistribution#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#default CdnDistribution#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#delete CdnDistribution#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/cdn_distribution#update CdnDistribution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnDistributionRoutingRulesList <a name="CdnDistributionRoutingRulesList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

cdndistribution.NewCdnDistributionRoutingRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnDistributionRoutingRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.get"></a>

```go
func Get(index *f64) CdnDistributionRoutingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnDistributionRoutingRulesOutputReference <a name="CdnDistributionRoutingRulesOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

cdndistribution.NewCdnDistributionRoutingRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnDistributionRoutingRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream">PutUpstream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUpstream` <a name="PutUpstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream"></a>

```go
func PutUpstream(value CdnDistributionRoutingRulesUpstream)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstream">Upstream</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference">CdnDistributionRoutingRulesUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstreamInput">UpstreamInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Upstream`<sup>Required</sup> <a name="Upstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstream"></a>

```go
func Upstream() CdnDistributionRoutingRulesUpstreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference">CdnDistributionRoutingRulesUpstreamOutputReference</a>

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `UpstreamInput`<sup>Optional</sup> <a name="UpstreamInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstreamInput"></a>

```go
func UpstreamInput() CdnDistributionRoutingRulesUpstream
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference <a name="CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

cdndistribution.NewCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetAllowList">ResetAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetBlockList">ResetBlockList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowList` <a name="ResetAllowList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetAllowList"></a>

```go
func ResetAllowList()
```

##### `ResetBlockList` <a name="ResetBlockList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetBlockList"></a>

```go
func ResetBlockList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowListInput">AllowListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockListInput">BlockListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList">AllowList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList">BlockList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowListInput`<sup>Optional</sup> <a name="AllowListInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowListInput"></a>

```go
func AllowListInput() *[]*string
```

- *Type:* *[]*string

---

##### `BlockListInput`<sup>Optional</sup> <a name="BlockListInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockListInput"></a>

```go
func BlockListInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowList`<sup>Required</sup> <a name="AllowList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList"></a>

```go
func AllowList() *[]*string
```

- *Type:* *[]*string

---

##### `BlockList`<sup>Required</sup> <a name="BlockList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList"></a>

```go
func BlockList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnDistributionRoutingRulesUpstreamGeoRestrictions
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---


### CdnDistributionRoutingRulesUpstreamOutputReference <a name="CdnDistributionRoutingRulesUpstreamOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

cdndistribution.NewCdnDistributionRoutingRulesUpstreamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnDistributionRoutingRulesUpstreamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions">PutGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resetGeoRestrictions">ResetGeoRestrictions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGeoRestrictions` <a name="PutGeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions"></a>

```go
func PutGeoRestrictions(value CdnDistributionRoutingRulesUpstreamGeoRestrictions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---

##### `ResetGeoRestrictions` <a name="ResetGeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resetGeoRestrictions"></a>

```go
func ResetGeoRestrictions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions">GeoRestrictions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference">CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.cachingInput">CachingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictionsInput">GeoRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClassInput">RateLimitClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniModeInput">SniModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.wafInput">WafInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.caching">Caching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass">RateLimitClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniMode">SniMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.waf">Waf</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GeoRestrictions`<sup>Required</sup> <a name="GeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions"></a>

```go
func GeoRestrictions() CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference">CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference</a>

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.cachingInput"></a>

```go
func CachingInput() interface{}
```

- *Type:* interface{}

---

##### `GeoRestrictionsInput`<sup>Optional</sup> <a name="GeoRestrictionsInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictionsInput"></a>

```go
func GeoRestrictionsInput() CdnDistributionRoutingRulesUpstreamGeoRestrictions
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `RateLimitClassInput`<sup>Optional</sup> <a name="RateLimitClassInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClassInput"></a>

```go
func RateLimitClassInput() *string
```

- *Type:* *string

---

##### `SniModeInput`<sup>Optional</sup> <a name="SniModeInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniModeInput"></a>

```go
func SniModeInput() *string
```

- *Type:* *string

---

##### `WafInput`<sup>Optional</sup> <a name="WafInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.wafInput"></a>

```go
func WafInput() interface{}
```

- *Type:* interface{}

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.caching"></a>

```go
func Caching() interface{}
```

- *Type:* interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `RateLimitClass`<sup>Required</sup> <a name="RateLimitClass" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass"></a>

```go
func RateLimitClass() *string
```

- *Type:* *string

---

##### `SniMode`<sup>Required</sup> <a name="SniMode" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniMode"></a>

```go
func SniMode() *string
```

- *Type:* *string

---

##### `Waf`<sup>Required</sup> <a name="Waf" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.waf"></a>

```go
func Waf() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnDistributionRoutingRulesUpstream
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

---


### CdnDistributionTimeoutsOutputReference <a name="CdnDistributionTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/cdndistribution"

cdndistribution.NewCdnDistributionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnDistributionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



